import { useState, useMemo, useCallback } from 'react';
import PageShell from '../components/PageShell.tsx';
import SearchFilter from '../components/SearchFilter.tsx';
import StatsBar from '../components/StatsBar.tsx';
import InventoryTable from '../components/InventoryTable.tsx';
import {
  mockInventoryData,
  getUniqueWarehouses,
  getUniqueManufacturers,
  getUniqueCategories,
} from '../data/mockData.ts';
import { FilterState, SortField, SortDirection, InventoryItem } from '../types.ts';

const PAGE_SIZE = 10;

const initialFilters: FilterState = {
  boxNumber: '',
  category: '',
  warehouse: '',
  manufacturer: '',
  location: '',
  materialName: '',
};

export default function InventoryPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(initialFilters);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const warehouses = useMemo(() => getUniqueWarehouses(), []);
  const manufacturers = useMemo(() => getUniqueManufacturers(), []);
  const categories = useMemo(() => getUniqueCategories(), []);

  const filteredData = useMemo(() => {
    return mockInventoryData.filter((item) => {
      const f = appliedFilters;
      if (f.boxNumber && !item.boxNumber.toLowerCase().includes(f.boxNumber.toLowerCase())) return false;
      if (f.category && item.category !== f.category) return false;
      if (f.warehouse && item.warehouseName !== f.warehouse) return false;
      if (f.manufacturer && item.manufacturer !== f.manufacturer) return false;
      if (f.location && !item.location.toLowerCase().includes(f.location.toLowerCase())) return false;
      if (f.materialName && !item.materialName.toLowerCase().includes(f.materialName.toLowerCase())) return false;
      return true;
    });
  }, [appliedFilters]);

  const sortedData = useMemo(() => {
    if (!sortField) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }
      return sortDirection === 'asc'
        ? String(aVal).localeCompare(String(bVal), 'ko')
        : String(bVal).localeCompare(String(aVal), 'ko');
    });
  }, [filteredData, sortField, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / PAGE_SIZE));
  const pagedData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return sortedData.slice(start, start + PAGE_SIZE);
  }, [sortedData, currentPage]);

  const stats = useMemo(() => {
    const uniqueWarehouses = new Set(filteredData.map((i: InventoryItem) => i.warehouseName));
    const uniqueMaterials = new Set(filteredData.map((i: InventoryItem) => i.materialName));
    const totalQty = filteredData.reduce((sum: number, i: InventoryItem) => sum + i.quantity, 0);
    return {
      totalItems: filteredData.length,
      totalQuantity: totalQty,
      warehouseCount: uniqueWarehouses.size,
      materialCount: uniqueMaterials.size,
    };
  }, [filteredData]);

  const handleSearch = useCallback(() => {
    setAppliedFilters({ ...filters });
    setCurrentPage(1);
  }, [filters]);

  const handleReset = useCallback(() => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
    setCurrentPage(1);
    setSortField(null);
  }, []);

  const handleSort = useCallback((field: SortField) => {
    setSortField((prev) => {
      if (prev === field) {
        setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
        return field;
      }
      setSortDirection('asc');
      return field;
    });
  }, []);

  return (
    <PageShell title="자재재고조회" subtitle="Material Inventory">
      <SearchFilter
        filters={filters}
        onFilterChange={setFilters}
        onSearch={handleSearch}
        onReset={handleReset}
        warehouses={warehouses}
        manufacturers={manufacturers}
        categories={categories}
      />
      <StatsBar {...stats} />
      <InventoryTable
        data={pagedData}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={handleSort}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalCount={sortedData.length}
        pageSize={PAGE_SIZE}
      />
    </PageShell>
  );
}
