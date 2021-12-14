import { render } from '@testing-library/react';

import Component215 from './component215';

describe('Component215', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component215 />);
    expect(baseElement).toBeTruthy();
  });
});
