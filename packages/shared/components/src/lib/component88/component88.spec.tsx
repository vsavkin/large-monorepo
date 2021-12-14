import { render } from '@testing-library/react';

import Component88 from './component88';

describe('Component88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component88 />);
    expect(baseElement).toBeTruthy();
  });
});
