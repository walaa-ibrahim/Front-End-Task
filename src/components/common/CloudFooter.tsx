import React from 'react'
import { Typography } from "antd";
import {
  footerText,
} from "../../layout/LayoutDesign";
const { Text, Link } = Typography;
const CloudFooter = () => {
  return (
    <Text style={footerText}>
      <Text className="main-text">Got questions? </Text>
      <Text className="gray-text">
        Take a look at our
        <Link href="#" target="_blank" style={{ color: `#0097C2` }}>
          &nbsp;FAQs
        </Link>
        , talk to us on Twitter
        <Link href="#" target="_blank" style={{ color: `#0097C2` }}>
        &nbsp;@icloudready
        </Link>
        &nbsp;or send an email to&nbsp;
      </Text>
      <Link
        href="mailto:team@icloud-ready.com"
        target="_blank"
        style={{ color: `#0097C2` }}
      >
        team@icloud-ready.com
      </Link>
    </Text>
  );
}

export default CloudFooter;