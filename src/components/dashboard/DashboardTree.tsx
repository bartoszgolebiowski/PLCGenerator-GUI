import React, { useState, useMemo, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import DashboardTreePanel from './DashboardTreePanel';
import {
  setLeaf,
  useDashboardDispatch,
  useDashboardStore,
} from './context';

import { TreeSearch } from './tree';
import {
  getIdTree,
  pickStyles,
  createLeaf,
  findMatches,
  isMatch,
  findQuantity,
} from './utils';

import {
  HomeResponseTreeChildren,
  HomeFormTreeResponse,
} from 'types';

const useStyles = makeStyles({
  treeRoot: { height: 110 },
  treeContainer: { height: '90vh', overflowY: 'scroll', flex: 2 },
  container: { width: '100vw', margin: '0 auto', display: 'flex' },
  label: {},
  labelBold: { fontWeight: 800 },
  searchContent: { background: '#3D9970' },
});

export const DashboardTree: React.FC = () => {
  const {
    tree,
    selectedLeaf,
    newAvaliableValues,
  } = useDashboardStore();
  const [search, setSearch] = useState('');
  const dispatch = useDashboardDispatch();
  const classes = useStyles();
  const [matches, setMatches] = useState<string[]>([]);

  useEffect(() => {
    setMatches(findMatches(tree, search));
  }, [tree, search]);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearch(event.target.value);
  };

  const handleClick = (id: string) => {
    setMatches((matches) => {
      if (matches.includes(id)) {
        return matches.filter((single) => single !== id);
      }
      return [...matches, id];
    });
  };

  const renderTreeRoot = (
    nodes: HomeFormTreeResponse,
    search: string,
  ) => {
    return (
      <TreeItem
        data-testid={nodes.Name}
        key={nodes.Name}
        nodeId={`${nodes.Name}`}
        label={nodes.Name}
        onClick={() => dispatch(setLeaf(null))}
        style={{ color: 'black' }}
      >
        {Array.isArray(nodes.Children)
          ? nodes.Children.map((node: HomeResponseTreeChildren) =>
              renderTree(node, search),
            )
          : null}
      </TreeItem>
    );
  };

  const renderTree = (
    nodes: HomeResponseTreeChildren,
    search: string,
  ) => {
    const styles = pickStyles(nodes, newAvaliableValues);
    const match = isMatch(nodes, search);

    return (
      <TreeItem
        data-testid={nodes.Name}
        key={nodes.Name}
        nodeId={`${nodes.Name}`}
        label={nodes.Name}
        onClick={() => {
          dispatch(
            setLeaf(createLeaf(JSON.parse(JSON.stringify(nodes)))),
          );
          handleClick(nodes.Name);
        }}
        style={styles}
        classes={{
          label:
            styles.color !== 'black'
              ? classes.labelBold
              : classes.label,
          content: match ? classes.searchContent : '',
        }}
      >
        {Array.isArray(nodes.Children)
          ? nodes.Children.map((node: HomeResponseTreeChildren) =>
              renderTree(node, search),
            )
          : null}
      </TreeItem>
    );
  };

  const quantity = useMemo(() => findQuantity(tree, search), [
    tree,
    search,
  ]);

  const treeItems = useMemo(() => renderTreeRoot(tree, search), [
    tree,
    search,
  ]);

  const expanded = useMemo(() => getIdTree(tree, []), [tree]);

  return (
    <div className={classes.container}>
      <div className={classes.treeContainer}>
        <TreeSearch
          onChange={handleChange}
          quantity={quantity.length - 1}
        />
        <TreeView
          className={classes.treeRoot}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={search === '' ? expanded : matches}
        >
          {treeItems}
        </TreeView>
      </div>
      <DashboardTreePanel
        key={selectedLeaf?.Name || 'Root'}
        selectedLeaf={selectedLeaf}
      />
    </div>
  );
};

export default DashboardTree;
