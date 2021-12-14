import { render } from '@testing-library/react';

import ImportantComponent88 from './important-component-88';

describe('ImportantComponent88', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent88 />);
    expect(baseElement).toBeTruthy();
  });
});
