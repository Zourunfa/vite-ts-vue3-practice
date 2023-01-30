export interface MenuContext {
  id: string;
  title: string;
  children?: Array<MenuContext>;
}

export const MenuData: MenuContext[] = [
  {
    id: '1',
    title: '菜單1',
  },
  {
    id: '2',
    title: '菜單2',
  },
  {
    id: '3',
    title: '菜單3',
    children: [
      {
        id: '3-1',
        title: '菜單1',
        children: [
          {
            id: '3-1-1',
            title: '菜單1',
          },
          {
            id: '3-1-2',
            title: '菜單1',
          },
          {
            id: '3-1-3',
            title: '菜單1',
          },
        ],
      },
      {
        id: '3-1',
        title: '菜單2',
      },
    ],
  },
  {
    id: '4',
    title: '菜單4',
  },
  {
    id: '5',
    title: '菜單5',
    children: [
      {
        id: '5-1',
        title: '菜單1',
        children: [
          {
            id: '5-1-1',
            title: '菜單1',
          },
          {
            id: '5-1-2',
            title: '菜單1',
          },
          {
            id: '5-1-3',
            title: '菜單1',
          },
        ],
      },
    ],
  },
];