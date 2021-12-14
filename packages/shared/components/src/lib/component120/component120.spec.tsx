import { render } from '@testing-library/react';

import Component120 from './component120';

describe('Component120', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component120 />);
    expect(baseElement).toBeTruthy();
  });
});
