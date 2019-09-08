import React from 'react';
import _ from 'lodash';

import {markdownify, Link} from '../utils';

export default class DemoList extends React.Component {
    render() {
        return (
            _.get(this.props, 'pageContext.site.data.demoList') && 
            <section id="demo-list" class="wrapper">
                <div class="inner alt">
                {_.map(_.get(this.props, 'pageContext.site.data.demoList'), (demo, demo_idx) => (
                    <section key={demo_idx} class="spotlight">
                        <div class="image"><img src="images/pic01.jpg" alt="" /></div>
                        <div class="content">
                            <h3>{_.get(demo, 'title')}</h3>
                            {markdownify(_.get(demo, 'description'))}
                            <ul class="actions">
                                <li>
                                    <Link to={_.get(demo, 'createSiteUrl')} class="button primary">Create site</Link>
                                </li>
                                <li>
                                    <Link to={_.get(demo, 'homepage')} class="button">Live preview</Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                ))}
                </div>
            </section>
            
        );
    }
}
