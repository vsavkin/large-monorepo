import { render } from '@testing-library/react';

import Icon223 from './icon223';

describe('Icon223', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon223 />);
    expect(baseElement).toBeTruthy();
  });
});
