import { useContentManagerEditViewDataManager } from 'strapi-helper-plugin';

export const useFruitField = () => {
  const { addRelation, onRemoveRelation } = useContentManagerEditViewDataManager();

  const FIELD_NAME = 'fruits_list.fruits';

  const add = (fruit) => {
    const { id, name } = fruit;
    addRelation({
      target: {
        name: FIELD_NAME,
        value: [{ label: name, value: { id, name } }],
      },
    });
  };

  const remove = (fieldIndex) => onRemoveRelation(`${FIELD_NAME}.${fieldIndex}`);

  return { add, remove };
};

export const useSelectAll = ({ fruits, checkedFruits }) => {
  const { add, remove } = useFruitField();

  const toggleSelectAll = () => {
    if (fruits?.length === checkedFruits?.length) {
      checkedFruits.forEach(() => remove(0));
      return;
    }

    if (!checkedFruits.length) {
      fruits.forEach(add);
      return;
    }

    const unchecked = fruits.filter(
      (fruit) => checkedFruits.findIndex((item) => item?.id === fruit.id) === -1,
    );
    unchecked.forEach(add);
  };

  return { toggleSelectAll };
};
