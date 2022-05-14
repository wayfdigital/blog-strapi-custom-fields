import { useContentManagerEditViewDataManager } from 'strapi-helper-plugin';

export const useFruitField = ({ fieldIndex }) => {
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

  const remove = () => onRemoveRelation(`${FIELD_NAME}.${fieldIndex}`);

  return { add, remove };
};
