import { render } from '@testing-library/react';

import Icon146 from './icon146';

describe('Icon146', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon146 />);
    expect(baseElement).toBeTruthy();
  });
});
