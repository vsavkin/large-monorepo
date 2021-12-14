import { render } from '@testing-library/react';

import ImportantComponent232 from './important-component-232';

describe('ImportantComponent232', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent232 />);
    expect(baseElement).toBeTruthy();
  });
});
