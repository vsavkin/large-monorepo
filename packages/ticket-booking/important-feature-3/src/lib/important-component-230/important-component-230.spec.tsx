import { render } from '@testing-library/react';

import ImportantComponent230 from './important-component-230';

describe('ImportantComponent230', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent230 />);
    expect(baseElement).toBeTruthy();
  });
});
