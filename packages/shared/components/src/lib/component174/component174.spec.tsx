import { render } from '@testing-library/react';

import Component174 from './component174';

describe('Component174', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component174 />);
    expect(baseElement).toBeTruthy();
  });
});
