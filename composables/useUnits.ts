export interface Unit {
  faction: 'Exo Militia' | 'Res\'ai' | 'Legion' | 'Ugnix';
  name: string;
  displayName: string;
}

export const useUnits = async ({ faction = null } = {}) => {
  const { data } = await useAsyncData("units", () =>
    queryContent("/units").findOne()
  );

  const units = computed<Unit[]>(() => {
    if (!data.value) return [];
    const units = data.value.body;
    let sorted
    if (faction) {
      sorted = useFilter(units, { faction })
    } else {
      sorted = useSortBy(units, ["faction", "name"]);
    }
    return sorted.map((unit) => ({ ...unit, displayName: unit.name.replace('_', ' ') }))
  });

  return { units }
}