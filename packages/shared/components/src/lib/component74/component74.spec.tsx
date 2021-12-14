import { render } from '@testing-library/react';

import Component74 from './component74';

describe('Component74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component74 />);
    expect(baseElement).toBeTruthy();
  });
});
