import type { ProjectCategory } from "@/content/projects";

export type WorkFilters = {
  type: ProjectCategory | "";
  year: string;
  search: string;
};

const PARAM_TYPE = "type";
const PARAM_YEAR = "year";
const PARAM_SEARCH = "q";

export function parseWorkFilters(searchParams: URLSearchParams): WorkFilters {
  return {
    type: (searchParams.get(PARAM_TYPE) as ProjectCategory | null) ?? "",
    year: searchParams.get(PARAM_YEAR) ?? "",
    search: searchParams.get(PARAM_SEARCH) ?? "",
  };
}

export function buildWorkFiltersUrl(filters: Partial<WorkFilters>): string {
  const params = new URLSearchParams();
  if (filters.type) params.set(PARAM_TYPE, filters.type);
  if (filters.year) params.set(PARAM_YEAR, filters.year);
  if (filters.search) params.set(PARAM_SEARCH, filters.search);
  const qs = params.toString();
  return qs ? `/work?${qs}` : "/work";
}
