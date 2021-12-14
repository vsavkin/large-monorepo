import { render } from '@testing-library/react';

import Icon34 from './icon34';

describe('Icon34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon34 />);
    expect(baseElement).toBeTruthy();
  });
});
