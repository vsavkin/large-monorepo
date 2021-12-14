import { render } from '@testing-library/react';

import ImportantComponent108 from './important-component-108';

describe('ImportantComponent108', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent108 />);
    expect(baseElement).toBeTruthy();
  });
});
