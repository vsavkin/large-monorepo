import { render } from '@testing-library/react';

import ImportantComponent130 from './important-component-130';

describe('ImportantComponent130', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent130 />);
    expect(baseElement).toBeTruthy();
  });
});
