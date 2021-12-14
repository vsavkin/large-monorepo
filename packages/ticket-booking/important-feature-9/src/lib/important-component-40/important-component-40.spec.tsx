import { render } from '@testing-library/react';

import ImportantComponent40 from './important-component-40';

describe('ImportantComponent40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent40 />);
    expect(baseElement).toBeTruthy();
  });
});
