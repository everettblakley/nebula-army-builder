import slugify from "slugify";
import uniqid from 'uniqid';
import { useStorage } from "@vueuse/core";
import { Faction } from "~~/types";

interface CreateListProps {
  name: string;
  faction: Faction;
  units?: Record<string, number>;
  pointLimit?: number;
}

export function useLists() {
  const createList = (list: CreateListProps) => {
    const id = uniqid(`${slugify(list.name, { lower: true })}-`);

    const newList = { id, ...list }

    return useStorage(id, newList);
  }

  const getList = async (id: string) => {
    return useStorage(id, null)
  }

  return { createList, getList }
}