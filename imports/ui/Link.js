import React from 'react';
import LinksList from './../ui/LinksList';
import PrivateHeader from './../ui/PrivateHeader';
import AddLink from './../ui/AddLink';
import LinksListFilters from './../ui/LinksListFilters';



export default Link = () => {
  return (
    <div>
      <PrivateHeader title="Your links"/>
      <LinksListFilters />
      <AddLink />
      <LinksList />
    </div>
  );
}




