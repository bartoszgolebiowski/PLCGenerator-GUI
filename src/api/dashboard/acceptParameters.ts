import axios from 'axios';
import { IP } from './../config';
import { SelectedLeaf } from 'types';

const parseValue = (value: any[] | any) => {
  if (Array.isArray(value)) {
    return value.map(parseSingleValue);
  }
  return parseSingleValue(value);
};

const parseSingleValue = (value: any) => {
  return Object.keys(value).reduce((acc, el) => {
    const element = value[el];
    if (Array.isArray(element)) {
      //@ts-ignore
      acc[el] = element.map(parseToNumberIfPossible);
      return acc;
    }
    //@ts-ignore
    acc[el] = parseToNumberIfPossible(element);
    return acc;
  }, {});
};

const parseToNumberIfPossible = (element: string) => {
  const number = parseInt(element);
  return Number.isNaN(number) ? element : number;
};

export const acceptManyParameters = (
  selectedLeaf: SelectedLeaf,
): Promise<void> => {
  return axios.post(
    `${IP}/Api/Configure/Many`,
    selectedLeaf.Parameters.map((el) => ({
      ElementName: selectedLeaf.Name,
      Name: el.Name,
      Value: parseValue(el.Value),
    })),
    {
      headers: { 'Content-type': 'application/json' },
    },
  );
};

export const acceptSingleParameter = (
  selectedLeaf: SelectedLeaf,
  index: number,
): Promise<void> => {
  return axios.post(
    `${IP}/Api/Configure/Single`,
    {
      ElementName: selectedLeaf.Name,
      Name: selectedLeaf.Parameters[index].Name,
      Value: parseValue(selectedLeaf.Parameters[index].Value),
    },
    {
      headers: { 'Content-type': 'application/json' },
    },
  );
};
