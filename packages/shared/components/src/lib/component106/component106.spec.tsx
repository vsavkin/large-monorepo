import { render } from '@testing-library/react';

import Component106 from './component106';

describe('Component106', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component106 />);
    expect(baseElement).toBeTruthy();
  });
});
