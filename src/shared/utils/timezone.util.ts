const VIETNAM_TIMEZONE_OFFSET_MS = 7 * 60 * 60 * 1000; // UTC+7

/**
 * Lấy thời gian hiện tại theo múi giờ Việt Nam (UTC+7) dưới dạng Date.
 * Giá trị này khi lưu xuống Postgres (timestamp without time zone)
 * sẽ trùng với thời gian hiển thị thực tế tại Việt Nam.
 */
export function getVietnamCurrentDate(): Date {
  const now = new Date();
  return new Date(now.getTime() + VIETNAM_TIMEZONE_OFFSET_MS);
}

/**
 * Chuẩn hóa một input bất kỳ (Date | string | number) sang Date theo UTC+7.
 * Hữu ích khi ta nhận thời gian từ form (string) nhưng muốn lưu giống giờ địa phương.
 */
export function normalizeVietnamTimestamp(
  value?: Date | string | number | null,
): Date | null | undefined {
  if (value === undefined) return undefined;
  if (value === null || value === '') return null;

  const base = new Date(value);
  if (Number.isNaN(base.getTime())) {
    throw new Error('Invalid date value provided');
  }
  return new Date(base.getTime() + VIETNAM_TIMEZONE_OFFSET_MS);
}

