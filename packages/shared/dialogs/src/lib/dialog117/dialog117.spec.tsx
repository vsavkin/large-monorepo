import { render } from '@testing-library/react';

import Dialog117 from './dialog117';

describe('Dialog117', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog117 />);
    expect(baseElement).toBeTruthy();
  });
});
