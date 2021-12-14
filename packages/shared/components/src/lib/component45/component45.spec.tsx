import { render } from '@testing-library/react';

import Component45 from './component45';

describe('Component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component45 />);
    expect(baseElement).toBeTruthy();
  });
});
