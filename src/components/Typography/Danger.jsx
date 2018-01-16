import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Danger extends React.Component{
    render(){
        return (
            <div className={this.props.classes.defaultFontStyle + " " + this.props.classes.dangerText}>
                {this.props.children}
            </div>
        );
    }
}

Danger.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Danger);
