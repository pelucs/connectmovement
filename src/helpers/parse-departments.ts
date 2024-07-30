export function ParseDepartment(department: string): string[] {
  const parse: string[] = JSON.parse(department);

  return parse;
}