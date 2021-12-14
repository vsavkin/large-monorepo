import { render } from '@testing-library/react';

import Component49 from './component49';

describe('Component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component49 />);
    expect(baseElement).toBeTruthy();
  });
});
