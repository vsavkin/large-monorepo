import { render } from '@testing-library/react';

import Component115 from './component115';

describe('Component115', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component115 />);
    expect(baseElement).toBeTruthy();
  });
});
