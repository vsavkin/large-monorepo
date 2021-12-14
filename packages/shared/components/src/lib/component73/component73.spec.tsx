import { render } from '@testing-library/react';

import Component73 from './component73';

describe('Component73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component73 />);
    expect(baseElement).toBeTruthy();
  });
});
