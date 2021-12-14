import { render } from '@testing-library/react';

import Component64 from './component64';

describe('Component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component64 />);
    expect(baseElement).toBeTruthy();
  });
});
