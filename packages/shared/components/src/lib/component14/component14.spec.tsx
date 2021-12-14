import { render } from '@testing-library/react';

import Component14 from './component14';

describe('Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
