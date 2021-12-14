import { render } from '@testing-library/react';

import Icon54 from './icon54';

describe('Icon54', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon54 />);
    expect(baseElement).toBeTruthy();
  });
});
