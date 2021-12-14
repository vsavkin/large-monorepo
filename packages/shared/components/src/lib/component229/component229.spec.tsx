import { render } from '@testing-library/react';

import Component229 from './component229';

describe('Component229', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component229 />);
    expect(baseElement).toBeTruthy();
  });
});
