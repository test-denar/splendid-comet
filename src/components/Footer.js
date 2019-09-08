import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                {_.get(this.props, 'pageContext.site.data.footer.copyright') && 
                    <p class="copyright">
                        {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                        <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                        </React.Fragment>))}
                    </p>
                }
            </footer>
        );
    }
}
