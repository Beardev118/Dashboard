import { inject } from "mobx-react";
import React from "react";
import { Layout } from "../styled";
import Table from "../components/table";
import { Link } from "react-router-dom";

interface IProps {
  history: {
    push(url: string): void;
  };
}

const items = [
  {
    id: 7,
    buildingId: 4,
    floor: 300,
    occupied: true,
    expiring: true,
    rates: 5,
    description: "nesto",
    edit: '<Link to="/apartment/new"></Link>'
  },
  {
    id: 7,
    buildingId: 4,
    floor: 300,
    occupied: true,
    expiring: true,
    rates: 5,
    description: "nesto",
    edit: <Link to="/apartment/new"></Link>
  },
  {
    id: 7,
    buildingId: 4,
    floor: 300,
    occupied: true,
    expiring: true,
    rates: 5,
    description: "nesto",
    edit: <Link to="/apartment/new"></Link>
  },
  {
    id: 7,
    buildingId: 4,
    floor: 300,
    occupied: true,
    expiring: true,
    rates: 5,
    description: "nesto",
    edit: <Link to="/apartment/new"></Link>
  }
];

@inject("store")
class Home extends React.Component {
  render(): JSX.Element {
    return (
      <Layout displayFlex column>
        <Table items={items} />
      </Layout>
    );
  }
}

// const {
//   Link,
//   Image,
//   ImageFit,
//   DetailsList,
//   buildColumns,
//   IColumn,
//   mergeStyles,
//   IGroup,
//   Fabric
// } = window.Fabric;

// interface IDetailsListCustomColumnsExampleState {
//   sortedItems: IExampleItem[];
//   columns: IColumn[];
// }

// class DetailsListCustomColumnsExample extends React.Component<
//   {},
//   IDetailsListCustomColumnsExampleState
// > {
//   constructor(props: {}) {
//     super(props);

//     const items = createListItems(500);
//     this.state = {
//       sortedItems: items,
//       columns: _buildColumns(items)
//     };
//   }

//   public render() {
//     const { sortedItems, columns } = this.state;

//     return (
//       <DetailsList
//         items={sortedItems}
//         setKey="set"
//         columns={columns}
//         onRenderItemColumn={_renderItemColumn}
//         onColumnHeaderClick={this._onColumnClick}
//         onItemInvoked={this._onItemInvoked}
//         onColumnHeaderContextMenu={this._onColumnHeaderContextMenu}
//         ariaLabelForSelectionColumn="Toggle selection"
//         ariaLabelForSelectAllCheckbox="Toggle selection for all items"
//       />
//     );
//   }

//   private _onColumnClick = (
//     event: React.MouseEvent<HTMLElement>,
//     column: IColumn
//   ): void => {
//     const { columns } = this.state;
//     let { sortedItems } = this.state;
//     let isSortedDescending = column.isSortedDescending;

//     // If we've sorted this column, flip it.
//     if (column.isSorted) {
//       isSortedDescending = !isSortedDescending;
//     }

//     // Sort the items.
//     sortedItems = _copyAndSort(
//       sortedItems,
//       column.fieldName!,
//       isSortedDescending
//     );

//     // Reset the items and columns to match the state.
//     this.setState({
//       sortedItems: sortedItems,
//       columns: columns.map(col => {
//         col.isSorted = col.key === column.key;

//         if (col.isSorted) {
//           col.isSortedDescending = isSortedDescending;
//         }

//         return col;
//       })
//     });
//   };

//   private _onColumnHeaderContextMenu(
//     column: IColumn | undefined,
//     ev: React.MouseEvent<HTMLElement> | undefined
//   ): void {
//     console.log(`column ${column!.key} contextmenu opened.`);
//   }

//   private _onItemInvoked(item: any, index: number | undefined): void {
//     alert(`Item ${item.name} at index ${index} has been invoked.`);
//   }
// }

// function _buildColumns(items: IExampleItem[]): IColumn[] {
//   const columns = buildColumns(items);

//   const thumbnailColumn = columns.filter(
//     column => column.name === "thumbnail"
//   )[0];

//   // Special case one column's definition.
//   thumbnailColumn.name = "";
//   thumbnailColumn.maxWidth = 50;

//   return columns;
// }

// function _renderItemColumn(item: IExampleItem, index: number, column: IColumn) {
//   const fieldContent = item[column.fieldName as keyof IExampleItem] as string;

//   switch (column.key) {
//     case "thumbnail":
//       return (
//         <Image
//           src={fieldContent}
//           width={50}
//           height={50}
//           imageFit={ImageFit.cover}
//         />
//       );

//     case "name":
//       return <Link href="#">{fieldContent}</Link>;

//     case "color":
//       return (
//         <span
//           data-selection-disabled={true}
//           className={mergeStyles({
//             color: fieldContent,
//             height: "100%",
//             display: "block"
//           })}
//         >
//           {fieldContent}
//         </span>
//       );

//     default:
//       return <span>{fieldContent}</span>;
//   }
// }

// function _copyAndSort<T>(
//   items: T[],
//   columnKey: string,
//   isSortedDescending?: boolean
// ): T[] {
//   const key = columnKey as keyof T;
//   return items
//     .slice(0)
//     .sort((a: T, b: T) =>
//       (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
//     );
// }

// const LOREM_IPSUM = (
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
//   "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
//   "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " +
//   "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
//   "mollit anim id est laborum"
// ).split(" ");

// const DATA = {
//   color: ["red", "blue", "green", "yellow"],
//   shape: ["circle", "square", "triangle"],
//   location: ["Seattle", "New York", "Chicago", "Los Angeles", "Portland"]
// };

// interface IExampleItem {
//   thumbnail: string;
//   key: string;
//   name: string;
//   description: string;
//   color: string;
//   shape: string;
//   location: string;
//   width: number;
//   height: number;
// }

// function createListItems(
//   count: number,
//   startIndex: number = 0
// ): IExampleItem[] {
//   return Array.apply(null, Array(count)).map((item: number, index: number) => {
//     const size = 150 + Math.round(Math.random() * 100);

//     return {
//       thumbnail: `//placehold.it/${size}x${size}`,
//       key: "item-" + (index + startIndex) + " " + lorem(4),
//       name: lorem(5),
//       description: lorem(10 + Math.round(Math.random() * 50)),
//       color: _randWord(DATA.color),
//       shape: _randWord(DATA.shape),
//       location: _randWord(DATA.location),
//       width: size,
//       height: size
//     };
//   });
// }

// function createGroups(
//   groupCount: number,
//   groupDepth: number,
//   startIndex: number,
//   itemsPerGroup: number,
//   level: number = 0,
//   key: string = "",
//   isCollapsed?: boolean
// ): IGroup[] {
//   if (key !== "") {
//     key = key + "-";
//   }
//   const count = Math.pow(itemsPerGroup, groupDepth);
//   return Array.apply(null, Array(groupCount)).map(
//     (value: number, index: number) => {
//       return {
//         count: count,
//         key: "group" + key + index,
//         name: "group " + key + index,
//         startIndex: index * count + startIndex,
//         level: level,
//         isCollapsed: isCollapsed,
//         children:
//           groupDepth > 1
//             ? createGroups(
//                 groupCount,
//                 groupDepth - 1,
//                 index * count + startIndex,
//                 itemsPerGroup,
//                 level + 1,
//                 key + index
//               )
//             : []
//       };
//     }
//   );
// }

// function lorem(wordCount: number): string {
//   return Array.apply(null, Array(wordCount))
//     .map((item: number, idx: number) => {
//       return LOREM_IPSUM[idx % LOREM_IPSUM.length];
//     })
//     .join(" ");
// }

// function isGroupable(key: string): boolean {
//   return key === "color" || key === "shape" || key === "location";
// }

// function _randWord(array: string[]): string {
//   const index = Math.floor(Math.random() * array.length);
//   return array[index];
// }

// ReactDOM.render(
//   <Fabric>
//     <DetailsListCustomColumnsExample />
//   </Fabric>,
//   document.getElementById("content")
// );
