export function generateReferralCode(firstName: string, id: string): string {
  const namePart = firstName.slice(0, 4).toUpperCase().padEnd(4, 'X');
  const uuidPart = id.slice(0, 6).toUpperCase();
  return `${namePart}${uuidPart}`;
}