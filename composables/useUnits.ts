import { MaybeRef } from "@vueuse/core";
import { Unit } from "~~/lib/types";

interface UseUnitsProps {
  faction?: MaybeRef<string | null>
}

export const useUnits = ({ faction = null }: UseUnitsProps = {}) => {
  const units = computedAsync<Unit[]>(async () => {
    const _faction = unref(faction)
    const data = await queryContent("/units").findOne()

    if (!data) return [];
    const units = data.body;
    let sorted
    if (faction) {
      sorted = useFilter(units, { faction: _faction })
    } else {
      sorted = useSortBy(units, ["faction", "name"]);
    }
    return sorted.map((unit) => ({ ...unit, displayName: unit.name.replace('_', ' ') }))
  }, [])

  return units
}