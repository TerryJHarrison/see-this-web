import reportWebVitals from "../reportWebVitals";
import {useEffect} from "react";
import {useLocation} from 'react-router-dom';
import {track} from "@amplitude/analytics-browser";

export function usePageLoad() {
  let location = useLocation();
  useEffect(() => reportWebVitals((metric) => {
    const data = {};
    data['url'] = `https://seeth.is${location.pathname}`;
    data[metric['name']] = metric['value'];
    track('Web Vital', data);
  }), [location.pathname]);
}

