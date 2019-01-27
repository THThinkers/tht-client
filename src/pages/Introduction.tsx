import React, { Component } from 'react';
import LocationBreadCrumb from '../components/LocationBreadCrumb';

interface IIntroductionProps {
  location: {
    pathname: string;
  };
}

class Introduction extends Component<IIntroductionProps> {
  public render() {
    const { pathname } = this.props.location;
    return (
      <>
        <LocationBreadCrumb pathname={pathname} />
        <div>this is Introduction</div>;
      </>
    );
  }
}

export default Introduction;
