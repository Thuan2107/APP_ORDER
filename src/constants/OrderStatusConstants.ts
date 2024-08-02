export const ORDER_STATUS: { [key: number]: { text: string, colorBackground: string, colorText: string } } = {
    0: { text: 'Đang phục vụ', colorBackground: '#CCE3F1', colorText: '#1462B0' },
    1: { text: 'Yêu cầu thanh toán', colorBackground: '#FFF1E0', colorText: '#FF8B00' },
    2: { text: 'Hoàn tất', colorBackground: '', colorText: '' },
    3: { text: 'Huỷ', colorBackground: '', colorText: '' },
    4: { text: 'Chờ thanh toán', colorBackground: '#FFE8EC', colorText: '#E8002E' },
};
