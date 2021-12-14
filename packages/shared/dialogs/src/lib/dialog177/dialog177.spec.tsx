import { render } from '@testing-library/react';

import Dialog177 from './dialog177';

describe('Dialog177', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog177 />);
    expect(baseElement).toBeTruthy();
  });
});
