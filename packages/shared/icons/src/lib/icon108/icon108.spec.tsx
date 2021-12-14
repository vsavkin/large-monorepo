import { render } from '@testing-library/react';

import Icon108 from './icon108';

describe('Icon108', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon108 />);
    expect(baseElement).toBeTruthy();
  });
});
