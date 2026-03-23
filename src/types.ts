// 자재 재고 데이터 타입 정의
export interface InventoryItem {
  id: number;
  warehouseName: string;   // 창고명
  location: string;        // Location
  materialName: string;    // 자재명
  specification: string;   // 규격
  unit: string;            // 단위
  quantity: number;        // 재고량
  boxNumber: string;       // BOX번호
  lotNumber: string;       // LOT번호
  manufacturer: string;    // 제조처
  category: string;        // 구분
}

export interface FilterState {
  boxNumber: string;
  category: string;
  warehouse: string;
  manufacturer: string;
  location: string;
  materialName: string;
}

export type SortField = keyof Pick<InventoryItem,
  'warehouseName' | 'materialName' | 'unit' | 'quantity' | 'boxNumber'
>;

export type SortDirection = 'asc' | 'desc';
