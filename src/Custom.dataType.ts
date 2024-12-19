
export interface visitor_Data {
   entry_Date: Date, 
   entry_time: string, 
   visitor_name: string, 
   phone_no: string, 
   visit_reason: string
}

export type LockerSizeType = 'medium' | 'normal' | 'large';
export type LockerStatusType = 'reserved' | 'free'; 
export type paymentStatusType = 'paid' | 'unpaid'; 


export interface locker_Data{
   locker_id: string, 
   locker_size: LockerSizeType, 
   locker_status: LockerStatusType, 
   locker_rent_price: number, 
   locker_rent_by: string, 
   locker_rent_date:Date, 
   payment_status: paymentStatusType
}

export interface Reserve_Locker_type{
   locker_rent_by: string, 
   locker_rent_date:Date, 
   locker_status: LockerStatusType,
   payment_status: paymentStatusType
}