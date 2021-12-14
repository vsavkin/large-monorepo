import { render } from '@testing-library/react';

import Component11 from './component11';

describe('Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
