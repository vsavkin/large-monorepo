import { render } from '@testing-library/react';

import Component22 from './component22';

describe('Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
