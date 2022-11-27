export interface Unit {
  faction: 'Exo Militia' | 'Res\'ai' | 'Legion' | 'Ugnix';
  name: string;
  displayName: string;
}

export const useUnits = async () => {
  const { data } = await useAsyncData("units", () =>
    queryContent("/units").findOne()
  );

  const units = computed<Unit[]>(() => {
    if (!data.value) return [];
    const units = data.value.body;
    const sorted = useSortBy(units, ["faction", "name"]);
    return sorted.map((unit) => ({ ...unit, displayName: unit.name.replace('_', ' ') }))
  });

  return { units }
}