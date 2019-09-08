import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, markdownify, classNames} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div class="content">
                    <h1><Link to={(_.get(this.props, 'pageContext.site.data.header.title_url').startsWith('#') ? _.get(this.props, 'pageContext.site.data.header.title_url') : safePrefix(_.get(this.props, 'pageContext.site.data.header.title_url')))}>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link></h1>
                    {markdownify(_.get(this.props, 'pageContext.site.data.header.subtitle'))}
                    {_.get(this.props, 'pageContext.site.data.header.actions') && 
                        <ul class="actions">
                            {_.map(_.get(this.props, 'pageContext.site.data.header.actions'), (action, action_idx) => (
                                <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} class={'button' + (_.get(action, 'is_primary') ? ' primary' : '') + (_.get(action, 'icon') ? ' icon ' + _.get(action, 'icon') : '') + (_.get(action, 'is_scrolly') ? ' scrolly' : '')}>{_.get(action, 'label')}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
                {_.get(this.props, 'pageContext.site.data.header.img') && 
                    <div className={classNames('image', {'phone': _.get(this.props, 'pageContext.site.data.header.img.phone_border')})}><div class="inner"><img src={safePrefix(_.get(this.props, 'pageContext.site.data.header.img.path'))} alt="" /></div></div>
                }
            </header>
        );
    }
}
